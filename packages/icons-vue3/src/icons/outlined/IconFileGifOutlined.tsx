// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileGifOutlinedSvg from 'icon-base/es/asn/FileGifOutlined';

export interface FileGifOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileGifOutlined: FileGifOutlinedIconType = (props, context) => (
    <Icon name='FileGifOutlined' {...{ ...props, ...context.attrs }} icon={FileGifOutlinedSvg} />
);

IconFileGifOutlined.displayName = 'IconFileGifOutlined';

export default IconFileGifOutlined;
