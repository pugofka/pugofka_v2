export default function Loading() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header Skeleton */}
                <div className="border-b border-white/10 pb-8 mb-20 animate-pulse">
                    <div className="h-20 w-2/3 bg-surface/50 rounded mb-4" />
                    <div className="h-4 w-1/3 bg-surface/50 rounded" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Sidebar Skeleton */}
                    <div className="md:col-span-1 hidden md:block space-y-8 animate-pulse">
                        <div className="h-8 w-full bg-surface/50 rounded" />
                        <div className="h-32 w-full bg-surface/50 rounded" />
                        <div className="h-20 w-full bg-surface/50 rounded" />
                    </div>

                    {/* Content Skeleton */}
                    <div className="md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-80 bg-surface/30 border border-border/50 animate-pulse p-6 flex flex-col">
                                    <div className="flex justify-between mb-8">
                                        <div className="h-3 w-20 bg-surface rounded" />
                                        <div className="h-3 w-16 bg-surface rounded" />
                                    </div>
                                    <div className="h-8 w-3/4 bg-surface rounded mb-4" />
                                    <div className="h-4 w-full bg-surface rounded mb-2" />
                                    <div className="h-4 w-2/3 bg-surface rounded" />
                                    <div className="mt-auto pt-6 border-t border-border/30 flex justify-between">
                                        <div className="h-6 w-24 bg-surface rounded" />
                                        <div className="h-3 w-16 bg-surface rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
