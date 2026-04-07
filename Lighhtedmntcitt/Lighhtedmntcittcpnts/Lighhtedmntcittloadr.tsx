import React, {useEffect, useRef} from 'react';
import {View, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

import {Animated} from 'react-native';
import Lighhtedmntcittlayyt from './Lighhtedmntcittlayyt';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

export const LighhtedmntcittLoader = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
  />
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: transparent;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .loader {
      --fill-color: #5c3d99;
      --shine-color: #5c3d9933;
      transform: scale(0.5);
      width: 100px;
      height: 100px;
      position: relative;
      filter: drop-shadow(0 0 10px var(--shine-color));
    }

    .loader #pegtopone {
      position: absolute;
      inset: 0;
      animation: flowe-one 1s linear infinite;
    }

    .loader #pegtoptwo {
      position: absolute;
      inset: 0;
      opacity: 0;
      transform: scale(0) translateY(-200px) translateX(-100px);
      animation: flowe-two 1s linear infinite;
      animation-delay: 0.3s;
    }

    .loader #pegtopthree {
      position: absolute;
      inset: 0;
      opacity: 0;
      transform: scale(0) translateY(-200px) translateX(100px);
      animation: flowe-three 1s linear infinite;
      animation-delay: 0.6s;
    }

    .loader svg {
      width: 100px;
      height: 100px;
      overflow: visible;
    }

    .loader svg g path:first-child {
      fill: var(--fill-color);
    }

    @keyframes flowe-one {
      0% {
        transform: scale(0.5) translateY(-200px);
        opacity: 0;
      }
      25% {
        transform: scale(0.75) translateY(-100px);
        opacity: 1;
      }
      50% {
        transform: scale(1) translateY(0px);
        opacity: 1;
      }
      75% {
        transform: scale(0.5) translateY(50px);
        opacity: 1;
      }
      100% {
        transform: scale(0) translateY(100px);
        opacity: 0;
      }
    }

    @keyframes flowe-two {
      0% {
        transform: scale(0.5) rotateZ(-10deg) translateY(-200px) translateX(-100px);
        opacity: 0;
      }
      25% {
        transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
        opacity: 1;
      }
      50% {
        transform: scale(1) rotateZ(0deg) translateY(0px) translateX(-25px);
        opacity: 1;
      }
      75% {
        transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0px);
        opacity: 1;
      }
      100% {
        transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
        opacity: 0;
      }
    }

    @keyframes flowe-three {
      0% {
        transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
        opacity: 0;
      }
      25% {
        transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
        opacity: 1;
      }
      50% {
        transform: scale(1) rotateZ(0deg) translateY(0px) translateX(25px);
        opacity: 1;
      }
      75% {
        transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0px);
        opacity: 1;
      }
      100% {
        transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
        opacity: 0;
      }
    }
  </style>
</head>
<body>
  <div class="loader">
    <svg id="pegtopone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <filter id="shine1">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <mask id="mask1">
          <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white"/>
        </mask>
        <radialGradient id="gradient1-1" cx="50" cy="66" fx="50" fy="66" r="30" gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="black" stop-opacity="0.3"/>
          <stop offset="50%" stop-color="black" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="black" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gradient1-2" cx="55" cy="20" fx="55" fy="20" r="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="white" stop-opacity="0.3"/>
          <stop offset="50%" stop-color="white" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gradient1-3" cx="85" cy="50" fx="85" fy="50" href="#gradient1-2"/>
        <radialGradient id="gradient1-4" cx="50" cy="58" fx="50" fy="58" r="60" gradientTransform="translate(0 47) scale(1 0.2)" href="#gradient1-3"/>
        <linearGradient id="gradient1-5" x1="50" y1="90" x2="50" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="black" stop-opacity="0.2"/>
          <stop offset="40%" stop-color="black" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <g>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient1-1)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" stroke-width="3" filter="url(#shine1)" mask="url(#mask1)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient1-2)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient1-3)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient1-4)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient1-5)"/>
      </g>
    </svg>

    <svg id="pegtoptwo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <filter id="shine2">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <mask id="mask2">
          <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white"/>
        </mask>
        <radialGradient id="gradient2-1" cx="50" cy="66" fx="50" fy="66" r="30" gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="black" stop-opacity="0.3"/>
          <stop offset="50%" stop-color="black" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="black" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gradient2-2" cx="55" cy="20" fx="55" fy="20" r="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="white" stop-opacity="0.3"/>
          <stop offset="50%" stop-color="white" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gradient2-3" cx="85" cy="50" fx="85" fy="50" href="#gradient2-2"/>
        <radialGradient id="gradient2-4" cx="50" cy="58" fx="50" fy="58" r="60" gradientTransform="translate(0 47) scale(1 0.2)" href="#gradient2-3"/>
        <linearGradient id="gradient2-5" x1="50" y1="90" x2="50" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="black" stop-opacity="0.2"/>
          <stop offset="40%" stop-color="black" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <g>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient2-1)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" stroke-width="3" filter="url(#shine2)" mask="url(#mask2)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient2-2)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient2-3)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient2-4)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient2-5)"/>
      </g>
    </svg>

    <svg id="pegtopthree" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <filter id="shine3">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <mask id="mask3">
          <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white"/>
        </mask>
        <radialGradient id="gradient3-1" cx="50" cy="66" fx="50" fy="66" r="30" gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="black" stop-opacity="0.3"/>
          <stop offset="50%" stop-color="black" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="black" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gradient3-2" cx="55" cy="20" fx="55" fy="20" r="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="white" stop-opacity="0.3"/>
          <stop offset="50%" stop-color="white" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gradient3-3" cx="85" cy="50" fx="85" fy="50" href="#gradient3-2"/>
        <radialGradient id="gradient3-4" cx="50" cy="58" fx="50" fy="58" r="60" gradientTransform="translate(0 47) scale(1 0.2)" href="#gradient3-3"/>
        <linearGradient id="gradient3-5" x1="50" y1="90" x2="50" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="black" stop-opacity="0.2"/>
          <stop offset="40%" stop-color="black" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <g>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient3-1)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" stroke-width="3" filter="url(#shine3)" mask="url(#mask3)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient3-2)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient3-3)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient3-4)"/>
        <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#gradient3-5)"/>
      </g>
    </svg>
  </div>
</body>
</html>`;

const Lighhtedmntcittloadr = () => {
  const navigation = useNavigation();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigation.replace('Lighhtedmntcittonbr');
    }, 6000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        console.log('timer cleared');
      }
    };
  }, [navigation]);

  return (
    <Lighhtedmntcittlayyt>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../elements/i/lighhtedmntcload.png')}
          style={{width: 280, height: 280, borderRadius: 50}}
        />
      </View>
      <View
        style={{
          alignSelf: 'center',
          position: 'absolute',
          bottom: 10,
        }}>
        <WebView
          originWhitelist={['*']}
          source={{html: LighhtedmntcittLoader}}
          style={{width: 260, height: 150, backgroundColor: 'transparent'}}
          scrollEnabled={false}
          transparent={true}
        />
      </View>
    </Lighhtedmntcittlayyt>
  );
};

export default Lighhtedmntcittloadr;
