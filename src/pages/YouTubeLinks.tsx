import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AppLayout } from "@/components/AppLayout";

const YouTubeLinks = () => {
  const videos = [
    {
      id: "1",
      title: "Tournament Highlights 2024",
      description: "Best moments from our latest tournament",
      embedId: "dQw4w9WgXcQ"
    },
    {
      id: "2",
      title: "Player Training Session",
      description: "Professional training techniques",
      embedId: "dQw4w9WgXcQ"
    },
    {
      id: "3",
      title: "Championship Finals",
      description: "Epic final match highlights",
      embedId: "dQw4w9WgXcQ"
    },
    {
      id: "4",
      title: "Team Strategy Guide",
      description: "Learn winning strategies",
      embedId: "dQw4w9WgXcQ"
    }
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#291F4D] mb-4">YouTube Videos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our latest tournament highlights, training sessions, and educational content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-[#291F4D]">{video.title}</CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default YouTubeLinks;