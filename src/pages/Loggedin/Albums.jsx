import React, { Fragment,useState, useContext, useEffect } from 'react';
import { AlbumService } from './AlbumService';
import Album from './Album';
// import Gallery from './components/Gallery';
// import { AlbumService, PhotoService } from './services';
import { UserContext } from '../../context';

const Albums = () => {
    const { currentUser } = useContext(UserContext);
    const [userAlbums,setuserAlbums] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const albumsData= await 
                AlbumService.list();
                // console.log(albumsData);
                setuserAlbums(prevAlbums => [
                    ...prevAlbums,
                    ...albumsData.filter(item => item.userId === currentUser?.id)
                ]);
    
        // console.log(albumsData.filter(item => item.userId === currentUser?.id));
    };
        
        fetchData();
    }, [currentUser?.id]);
    // console.log(userAlbums);

    return (
        <div>
            <h1
                style={{
                color: 'blue',
            }}>
                Albums
            </h1>
            {/* <Gallery photos={photos} /> */}
            {userAlbums &&
                userAlbums.map((album,index) => (
            <Fragment key={index}>
                <Album data={album} />
            </Fragment>
        ))}
        </div>
    );
};

export default Albums;
