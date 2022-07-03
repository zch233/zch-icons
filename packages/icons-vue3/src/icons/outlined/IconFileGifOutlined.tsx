// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileGifOutlinedSvg from 'icons-base/es/asn/FileGifOutlined';

export interface FileGifOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileGifOutlined: FileGifOutlinedIconType = (props, context) => (
    <Icon name='FileGifOutlined' {...{ ...props, ...context.attrs }} icon={FileGifOutlinedSvg} />
);

IconFileGifOutlined.displayName = 'IconFileGifOutlined';
IconFileGifOutlined.theme = 'outlined';
IconFileGifOutlined.originName = 'file-gif';

export default IconFileGifOutlined;
