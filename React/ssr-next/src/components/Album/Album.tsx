import Image from 'next/image';
import { Photos } from "../../models";
import Api from "../../api/api";

type Props = {
  albumId: number;
};

const Album = async ({ albumId }: Props) => {
  const photos: Photos = await Api.getPhotos(albumId);

  return (
    <div className="album-container">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-container">
          <img 
            src={photo.url} 
            alt={photo.title || "Album photo"}
            width={150}
            height={150}
            className="photo-img"
          />
        </div>
      ))}
    </div>
  );
};

export default Album;
