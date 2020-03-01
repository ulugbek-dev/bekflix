import React from 'react';
import { VideoStyled } from './styled';

export default function Trailer({ video }) {
    return (
        <VideoStyled className="video">
            <p>Trailer</p>
            <iframe 
                src={`https://www.youtube.com/embed/${video}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title={video}
            ></iframe>
        </VideoStyled>
    );
}