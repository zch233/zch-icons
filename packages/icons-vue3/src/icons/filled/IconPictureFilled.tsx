// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PictureFilledSvg from 'icons-base/es/asn/PictureFilled';

export interface PictureFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPictureFilled: PictureFilledIconType = (props, context) => <Icon name='PictureFilled' {...{ ...props, ...context.attrs }} icon={PictureFilledSvg} />;

IconPictureFilled.displayName = 'IconPictureFilled';
IconPictureFilled.theme = 'filled';
IconPictureFilled.originName = 'picture';

export default IconPictureFilled;
