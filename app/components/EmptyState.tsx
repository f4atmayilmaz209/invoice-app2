import { buttonVariants } from "@/components/ui/button";
import { Ban, PlusIcon } from "lucide-react";
import Link from "next/link";


interface iAppProps{
    title:string
    description:string;
    buttontext:string;
    href:string;
}

export function EmptyState({
    buttontext,
    description,
    href,
    title,
}:iAppProps){
    return(
        <div className="animate-in fade-in-50 p-8 text-center rounded-md border-2 border-dashed flex flex-col flex-1 h-full items-center justify-center">
            <div className="bg-primary/10 rounded-full flex items-center justify-center size-20">
                <Ban className="size-10 text-primary"/>
            </div>
            <h2 className="mt-6 text-xl font-semibold">{title}</h2>
            <p className="max-w-xl mx-auto mb-8 mt-2 text-sm text-muted-foreground">
                {description}
            </p>
            <Link href={href} className={buttonVariants()}>
                <PlusIcon className="size-4 mr-2"/>{buttontext}
            </Link>
        </div>
    )
}