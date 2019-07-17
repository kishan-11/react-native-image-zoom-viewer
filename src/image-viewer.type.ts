import * as React from 'react';
import { Image, ImageURISource, Text, View, ViewStyle } from 'react-native';
import { simpleStyle } from './image-viewer.style';

export class Props {
  /**
   * 是否显示
   */
  public show?: boolean = false;

  /**
   * 图片数组
   */
  public imageUrls: IImageInfo[] = [];

  /**
   * 滑动到下一页的X阈值
   */
  public flipThreshold?: number = 80;

  /**
   * 当前页能滑到下一页X位置最大值
   */
  public maxOverflow?: number = 300;

  /**
   * 初始显示第几张图
   */
  public index?: number = 0;

  /**
   * 加载失败的图
   */
  public failImageSource?: IImageInfo = undefined;

  /**
   * 背景颜色
   */
  public backgroundColor?: string = 'black';

  /**
   * style props for the footer container
   */
  public footerContainerStyle?: object = {};

  /**
   * Menu Context Values
   */
  public menuContext?: any = { saveToLocal: 'save to the album', cancel: 'cancel' };

  /**
   * 是否开启长按保存到本地的功能
   */

  /**
   * 是否允许缩放图片
   */
  public enableImageZoom?: boolean = true;

  public style?: ViewStyle = {};

  /**
   * Enable swipe down to close image viewer.
   * When swipe down, will trigger onCancel.
   */
  public enableSwipeDown?: boolean = false;

  /**
   * threshold for firing swipe down function
   */
  public swipeDownThreshold?: number;

  public doubleClickInterval?: number;

  /**
   * 是否预加载图片
   */
  public enablePreload?: boolean = false;

  /**
   * 翻页时的动画时间
   */
  public pageAnimateTime?: number = 100;

  /**
   * Render image component
   */
  public renderImage?: (props: any) => React.ReactElement<any> = (props: any) => {
    return React.createElement(Image, props);
  };
  /**
   * 弹出大图的回调
   */
  public onShowModal?: (content?: any) => void = () => {
    //
  };

  /**
   * 取消看图的回调
   */
  public onCancel?: () => void = () => {
    //
  };

  /**
   * function that fires when user swipes down
   */
  public onSwipeDown?: (isSucess?: boolean | undefined) => void = () => {
    //
  };

  /**
   * 渲染loading元素
   */
  public loadingRender?: () => React.ReactElement<any> = () => {
    return null as any;
  };
  /**
   * 当图片切换时触发
   */
  public onChange?: (index?: number) => void = () => {
    //
  };
  public handlePanSwipeDown?: (dY?: number | undefined) => void = () => {
    //
  }
}

export class State {
  /**
   * 是否显示
   */
  public show?: boolean = false;

  /**
   * 当前显示第几个
   */
  public currentShowIndex?: number = 0;

  /**
   * 图片拉取是否完毕了
   */
  public imageLoaded?: boolean = false;

  /**
   * 图片长宽列表
   */
  public imageSizes?: IImageSize[] = [];

  /**
   * 是否出现功能菜单
   */
}

export interface IImageInfo {
  src?: string;
  type?: string;
  /**
   * 没有的话会自动拉取
   */
  width?: number;
  /**
   * 没有的话会自动拉取
   */
  height?: number;
  /**
   * 图片字节大小(kb为单位)
   */
  sizeKb?: number;
  /**
   * 原图字节大小(kb为单位)
   * 如果设置了这个字段,并且有原图url,则显示查看原图按钮
   */
  originSizeKb?: number;
  /**
   * 原图url地址
   */
  originUrl?: string;
  /**
   * Pass to image props
   */
  props?: any;
  /**
   * 初始是否不超高 TODO:
   */
  freeHeight?: boolean;
  /**
   * 初始是否不超高 TODO:
   */
  freeWidth?: boolean;
}

export interface IImageSize {
  width: number;
  height: number;
  // 图片加载状态
  status: 'loading' | 'success' | 'fail';
}
