
import { NextResponse } from 'next/server';
import { load } from 'cheerio';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postUrl = searchParams.get('url');

  if (!postUrl) {
    return NextResponse.json({ error: 'Post URL is required' }, { status: 400 });
  }

  try {
    const response = await fetch(postUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch post: ${response.statusText}`);
    }
    const html = await response.text();
    const $ = load(html);

    // This selector is specific to Blogger's classic theme structure.
    // It might need adjustment if the blog's theme changes.
    const postBody = $('.post-body.entry-content');
    
    // Remove all inline style attributes to prevent color overrides
    postBody.find('*').removeAttr('style');

    const postContent = postBody.html();
    const postTitle = $('.post-title.entry-title').text();

    if (!postContent) {
        return NextResponse.json({ error: 'Could not find post content. The blog structure might have changed.' }, { status: 404 });
    }

    return NextResponse.json({ title: postTitle, content: postContent });

  } catch (error) {
    console.error('Failed to fetch and parse post content:', error);
    return NextResponse.json({ error: 'Failed to fetch post content' }, { status: 500 });
  }
}
