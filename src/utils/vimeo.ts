export interface VimeoParams {
  autopause: boolean | 0 | 1;
  autoplay: boolean | 0 | 1;
  background: boolean | 0 | 1;
  byline: boolean | 0 | 1;
  color: string;
  controls: boolean | 0 | 1;
  dnt: boolean | 0 | 1;
  keyboard: boolean | 0 | 1;
  loop: boolean | 0 | 1;
  muted: boolean | 0 | 1;
  pip: boolean | 0 | 1;
  playsinline: boolean | 0 | 1;
  portrait: boolean | 0 | 1;
  quality: '240p' | '360p' | '540p' | '720p' | '1080p' | '2k' | '4k';
  speed: boolean | 0 | 1;
  '#t': string,
  texttrack: boolean | string;
  title: boolean | 0 | 1;
  tranparent: boolean | 0 | 1;
}

export function vimeo_link(video_id: string, params?: Partial<VimeoParams>): string {
  const query: string | undefined = params ? '?' + Object.entries(params).reduce((prev: string, [key, value]) => {
    const param = `${key}=${typeof value === 'string' ? value : JSON.stringify(value)}`;
    return prev + (prev ? '&' : '') + param;
  }, '') : undefined;

  return `https://player.vimeo.com/video/${video_id}${query ?? ''}`;

}
