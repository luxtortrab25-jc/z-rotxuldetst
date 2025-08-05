
'use client';
import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '../ui/button';


interface BlogPost {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
}

interface FullPost {
    title: string;
    content: string;
}

const PostPreviewDialog = ({ postUrl, children, isOpen, onOpenChange }: { postUrl: string, children: React.ReactNode, isOpen: boolean, onOpenChange: (open: boolean) => void }) => {
    const [loading, setLoading] = React.useState(false);
    const [fullPost, setFullPost] = React.useState<FullPost | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const fetchPostContent = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/blog/post?url=${encodeURIComponent(postUrl)}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to load post content.');
            }
            const data = await response.json();
            if (!data.content) {
                 throw new Error('No se pudo encontrar el contenido del post. La estructura del blog puede haber cambiado.');
            }
            setFullPost(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (isOpen && !fullPost && !loading && !error) {
            fetchPostContent();
        }
    }, [isOpen, fullPost, loading, error]);
    
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl h-[90vh] flex flex-col p-0">
                {loading ? (
                     <div className="flex items-center justify-center h-full">
                        <div className="text-center p-6">
                            <p className="text-lg mb-4 text-white">Cargando contenido...</p>
                            <div className="space-y-4">
                                <Skeleton className="h-8 w-3/4 mx-auto bg-muted/50" />
                                <Skeleton className="h-4 w-full mx-auto bg-muted/50" />
                                <Skeleton className="h-4 w-full mx-auto bg-muted/50" />
                                <Skeleton className="h-4 w-5/6 mx-auto bg-muted/50" />
                            </div>
                        </div>
                    </div>
                ) : error ? (
                     <div className="flex items-center justify-center h-full text-center p-6">
                        <div>
                            <p className="text-destructive text-lg mb-4">{error}</p>
                             <p className='text-white'>Puedes leer el artículo directamente en el blog.</p>
                            <Button asChild className="mt-4">
                                <a href={postUrl} target="_blank" rel="noopener noreferrer">Ir al Blog</a>
                            </Button>
                        </div>
                    </div>
                ) : fullPost ? (
                    <>
                        <DialogHeader className="p-6 pb-2">
                            <DialogTitle className="text-2xl md:text-3xl font-headline text-primary pr-8">{fullPost.title}</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="flex-1 px-6 pb-6">
                            <div
                                className="prose prose-invert max-w-none prose-p:text-justify [&_img]:rounded-md [&_a]:text-primary [&_img]:mx-auto"
                                dangerouslySetInnerHTML={{ __html: fullPost.content }}
                            />
                        </ScrollArea>
                    </>
                ) : null}
            </DialogContent>
        </Dialog>
    );
};

export default function BlogSection() {
    const [posts, setPosts] = React.useState<BlogPost[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [activePost, setActivePost] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/blog');
                const data = await response.json();
                if (data.posts) {
                    setPosts(data.posts);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <section id="blog" className="py-20 sm:py-32 bg-black">
                <div className="container">
                     <div className="text-center">
                        <h2 className="font-headline text-5xl font-bold uppercase text-primary md:text-6xl">
                            Blog
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-xl">
                            Cargando últimas entradas...
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, index) => (
                             <div key={index} className="p-2 md:p-4">
                                <Card className="overflow-hidden bg-background">
                                    <CardHeader className="p-0">
                                        <Skeleton className="h-48 w-full" />
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <Skeleton className="h-6 w-3/4 mb-4" />
                                        <Skeleton className="h-4 w-full" />
                                         <Skeleton className="h-4 w-5/6 mt-2" />
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (posts.length === 0) {
        return (
             <section id="blog" className="py-20 sm:py-32 bg-black">
                <div className="container text-center">
                    <h2 className="font-headline text-5xl font-bold uppercase text-primary md:text-6xl">
                        Blog
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-xl">
                        Aún no hay publicaciones en el blog. ¡Vuelve pronto!
                    </p>
                </div>
            </section>
        );
    }

  return (
    <section id="blog" className="py-20 sm:py-32 bg-black">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-5xl font-bold uppercase text-primary md:text-6xl">
            Blog
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-xl">
            Consejos de expertos, novedades y todo lo que necesitas saber sobre el cuidado automotriz.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="h-full">
                <PostPreviewDialog 
                    postUrl={post.link} 
                    isOpen={activePost === post.link} 
                    onOpenChange={(isOpen) => setActivePost(isOpen ? post.link : null)}
                >
                    <Card 
                        onClick={() => setActivePost(post.link)}
                        className="overflow-hidden bg-background h-full flex flex-col transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
                    >
                        <CardHeader className="p-0">
                           <div className="relative h-48 w-full overflow-hidden">
                               {post.thumbnail ? (
                                    <Image
                                        src={post.thumbnail}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                               ) : (
                                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                                        <span className="text-muted-foreground text-sm">Sin imagen</span>
                                    </div>
                               )}
                           </div>
                        </CardHeader>
                        <CardContent className="p-6 flex flex-col flex-grow">
                          <CardTitle className="font-body text-2xl font-bold text-white mb-2 h-24 line-clamp-3">
                            {post.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-base line-clamp-3">
                            {post.description}
                          </p>
                        </CardContent>
                    </Card>
                </PostPreviewDialog>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
