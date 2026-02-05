import { Card, CardContent } from "@/components/ui/card";


export default function AnnouncementCard({ title }: { title: string }) {
return (
<Card className="bg-neutral-900 border-green-500">
<CardContent className="p-6">
<h3 className="text-xl">{title}</h3>
</CardContent>
</Card>
);
}