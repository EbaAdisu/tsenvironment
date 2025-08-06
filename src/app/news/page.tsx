
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { blogPosts } from '@/data'
import Link from 'next/link'

export default function NewsPage() {
    return (
        <div className="min-h-screen">
            <main>
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                News
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Stay updated with our latest news and insights
                            </p>
                        </div>
                    </div>
                </section>

                {/* Blog Posts */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">
                                Latest Posts
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Our recent articles and updates
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post) => (
                                <Card key={post.id} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle>{post.title}</CardTitle>
                                        <p className="text-sm text-gray-500">
                                            {post.author} on {post.date}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-gray-700 mb-4">
                                            {post.summary}
                                        </CardDescription>
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Read More
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6">
                                Stay Connected
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Subscribe to our newsletter for the latest
                                updates and news
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Contact Us
                                </Link>
                                                                <Link
                                    href="/training"
                                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    View Training Programs
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
