"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    Loader2,
    FileText,
    Edit,
    Trash2,
    MessageSquare,
    Eye,
    Calendar,
    User,
    CheckCircle2,
    XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useBlogById } from "@/hooks/useBlog";
import { useComments, useApproveComment, useDeleteComment } from "@/hooks/useComment";
import type { CommentWithLead } from "@/types/comment.types";

const statusConfig = {
    published: {
        label: "Published",
        className: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    },
    draft: {
        label: "Draft",
        className: "bg-zinc-500/10 text-zinc-500 border-zinc-500/20",
    },
};

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const businessId = params.id as string;
    const blogId = params.blogId as string;

    const [deleteCommentId, setDeleteCommentId] = useState<string | null>(null);

    // Fetch blog data
    const { data: blog, isLoading: isBlogLoading, isError: isBlogError } = useBlogById(blogId);

    // Fetch comments for this blog
    const { data: commentsResponse, isLoading: isCommentsLoading } = useComments({
        blogId,
        page: 1,
        limit: 100,
    });

    // Mutations
    const approveCommentMutation = useApproveComment();
    const deleteCommentMutation = useDeleteComment();

    // Handlers
    const handleApproveToggle = (comment: CommentWithLead) => {
        approveCommentMutation.mutate({
            id: comment._id,
            data: { isApproved: !comment.isApproved },
        });
    };

    const handleDeleteComment = () => {
        if (deleteCommentId) {
            deleteCommentMutation.mutate(deleteCommentId, {
                onSuccess: () => {
                    setDeleteCommentId(null);
                },
            });
        }
    };

    // Loading state
    if (isBlogLoading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    // Error state
    if (isBlogError || !blog) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                    <FileText className="h-10 w-10 text-destructive" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Blog Not Found</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    The blog you're looking for doesn't exist or has been deleted.
                </p>
                <Button
                    onClick={() => router.push(`/business/${businessId}/blog`)}
                    className="mt-4"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blogs
                </Button>
            </div>
        );
    }

    const comments = commentsResponse?.data || [];
    const approvedCount = comments.filter((c) => c.isApproved).length;
    const pendingCount = comments.filter((c) => !c.isApproved).length;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => router.push(`/business/${businessId}/blog`)}
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Blog Details</h1>
                        <p className="text-sm text-muted-foreground">
                            Manage blog content and moderate comments
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                    </Button>
                    <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Blog
                    </Button>
                </div>
            </div>

            {/* Blog Info Card */}
            <Card>
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-2">
                                <CardTitle className="text-xl">{blog.title}</CardTitle>
                                <Badge
                                    variant="outline"
                                    className={statusConfig[blog.status].className}
                                >
                                    {statusConfig[blog.status].label}
                                </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">/{blog.slug}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {blog.excerpt && (
                        <div>
                            <h4 className="text-sm font-medium mb-2">Excerpt</h4>
                            <p className="text-sm text-muted-foreground">{blog.excerpt}</p>
                        </div>
                    )}

                    <Separator />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>Created</span>
                            </div>
                            <p className="text-sm font-medium">
                                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </p>
                        </div>

                        {blog.publishedAt && (
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>Published</span>
                                </div>
                                <p className="text-sm font-medium">
                                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        )}

                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Eye className="h-4 w-4" />
                                <span>Views</span>
                            </div>
                            <p className="text-sm font-medium">{blog.viewCount || 0}</p>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MessageSquare className="h-4 w-4" />
                                <span>Comments</span>
                            </div>
                            <p className="text-sm font-medium">{blog.commentCount || 0}</p>
                        </div>
                    </div>

                    {blog.category && (
                        <>
                            <Separator />
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium">Category</h4>
                                <Badge variant="secondary">{blog.category}</Badge>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-lg">Comments</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                                {approvedCount} approved, {pendingCount} pending
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {isCommentsLoading ? (
                        <div className="flex items-center justify-center py-8">
                            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                        </div>
                    ) : comments.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                <MessageSquare className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="mt-4 text-base font-semibold">No comments yet</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                This blog post doesn't have any comments yet.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {comments.map((comment) => (
                                <div
                                    key={comment._id}
                                    className="flex items-start gap-4 rounded-lg border p-4"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                        <User className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-sm font-medium">
                                                    {comment.lead?.name || "Anonymous"}
                                                </p>
                                                {comment.lead?.email && (
                                                    <p className="text-xs text-muted-foreground">
                                                        {comment.lead.email}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge
                                                    variant={comment.isApproved ? "default" : "secondary"}
                                                    className="text-xs"
                                                >
                                                    {comment.isApproved ? "Approved" : "Pending"}
                                                </Badge>
                                                <p className="text-xs text-muted-foreground">
                                                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{comment.comment}</p>
                                        <div className="flex items-center gap-2 pt-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleApproveToggle(comment)}
                                                disabled={approveCommentMutation.isPending}
                                            >
                                                {comment.isApproved ? (
                                                    <>
                                                        <XCircle className="mr-2 h-4 w-4" />
                                                        Unapprove
                                                    </>
                                                ) : (
                                                    <>
                                                        <CheckCircle2 className="mr-2 h-4 w-4" />
                                                        Approve
                                                    </>
                                                )}
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setDeleteCommentId(comment._id)}
                                                disabled={deleteCommentMutation.isPending}
                                            >
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={!!deleteCommentId} onOpenChange={() => setDeleteCommentId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Comment</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete this comment? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteComment}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
