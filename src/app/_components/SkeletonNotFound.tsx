import { Skeleton } from "@/components/ui/skeleton"; 
import { Loader2Icon } from "lucide-react"


export const SkeletonNotFound = () => {
    return <div className="w-[577px] h-[128px] border border-gray-300 rounded-lg">
       
        <Loader2Icon className="animate-spin" />
    </div>
}