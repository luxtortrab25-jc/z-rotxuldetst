import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();
const RSS_FEED_URL = 'https://luxtordetailstudios.blogspot.com/feeds/posts/default?alt=rss';

const extractFirstImage = (html: string) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = html.match(imgRegex);
    return match ? match[1] : '';
};

const stripHtml = (html: string) => {
    return html.replace(/<[^>]+>/g, '');
};

export async function GET() {
  try {
    const feed = await parser.parseURL(RSS_FEED_URL);
    // Fetch all posts, then slice
    const posts = feed.items.map(item => ({
      title: item.title,
      link: item.link,
      thumbnail: extractFirstImage(item.content || ''),
      description: stripHtml(item.contentSnippet || ''),
    })).slice(0, 3); // Show only the 3 most recent posts

    return NextResponse.json({ posts }, {
        headers: {
            'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=300'
        }
    });
  } catch (error) {
    console.error('Failed to fetch RSS feed:', error);
    return NextResponse.json({ error: 'Failed to fetch RSS feed' }, { status: 500 });
  }
}
