import React from 'react';

type DefaultProps = Record<string, never>;

type Props<P = DefaultProps> = {
    [K in keyof P]: P[K];
};

/**
 * Component with no children.
 */
export type FC<P = DefaultProps> = (props: P) => React.ReactElement | null;

/**
 * Component with optional children.
 */
export type FCC<P = DefaultProps> = (
    props: Props<P> & { children?: React.ReactNode }
) => React.ReactElement | null;

/**
 * Component with required children.
 */
export type FCR<P = Record<string, never>> = (
    props: Props<P> & { children: React.ReactNode }
) => React.ReactElement | null;
