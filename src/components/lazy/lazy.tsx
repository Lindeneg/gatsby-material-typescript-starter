import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Fade,
    Grow,
    Slide,
    Zoom,
    CollapseProps,
    FadeProps,
    GrowProps,
    SlideProps,
    ZoomProps
} from '@material-ui/core';

import { RequiredChild } from '../../util';

type LazyTypes = 'collapse' | 'fade' | 'grow' | 'slide' | 'zoom';

type LazyType<T extends LazyTypes> = { type: T; delay: number };

type LazyProps<T extends LazyTypes> = LazyType<T> &
    RequiredChild<React.ReactElement | undefined> &
    Omit<
        T extends 'collapse'
            ? CollapseProps
            : T extends 'fade'
            ? FadeProps
            : T extends 'grow'
            ? GrowProps
            : T extends 'slide'
            ? SlideProps
            : T extends 'zoom'
            ? ZoomProps
            : Record<string, never>,
        'children'
    >;

function Lazy<T extends LazyTypes>(props: LazyProps<T>): React.ReactElement | null {
    const [show, setShow] = useState<boolean>(false);

    const timer = setTimeout(() => {
        setShow(true);
    }, props.delay);

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        };
    }, [timer]);

    const children = <div style={{ overflow: 'hidden' }}>{props.children}</div>;

    switch (props.type) {
        case 'collapse':
            return (
                <Collapse {...(props as CollapseProps)} in={show}>
                    {children}
                </Collapse>
            );
        case 'fade':
            return (
                <Fade {...(props as FadeProps)} in={show}>
                    {children}
                </Fade>
            );
        case 'grow':
            return (
                <Grow {...(props as GrowProps)} in={show}>
                    {children}
                </Grow>
            );
        case 'slide':
            return (
                <Slide {...(props as SlideProps)} in={show}>
                    {children}
                </Slide>
            );
        case 'zoom':
            return (
                <Zoom {...(props as ZoomProps)} in={show}>
                    {children}
                </Zoom>
            );
        default:
            return null;
    }
}

export default Lazy;
