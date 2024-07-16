import { Flex } from "antd";
import Api from "../../api/api";
import Album from "../Album/Album";
import { Albums } from "../../models";

const getData = async (): Promise<Albums> => {
    const data = await Api.getAlbums();
    return data;
};
const AlbumsList = async () => {
    const data = await getData();

    return (
        <Flex wrap="wrap" gap="middle" justify="center">
            {data.map((album) => (
                <Album key={album.id} albumId={album.id} />
            ))}
        </Flex>
    );
};

export default AlbumsList;
