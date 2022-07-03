// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileImageTwotoneSvg from 'icons-base/es/asn/FileImageTwotone';

export interface FileImageTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileImageTwotone: FileImageTwotoneIconType = (props, context) => (
    <Icon name='FileImageTwotone' {...{ ...props, ...context.attrs }} icon={FileImageTwotoneSvg} />
);

IconFileImageTwotone.displayName = 'IconFileImageTwotone';
IconFileImageTwotone.theme = 'twotone';
IconFileImageTwotone.originName = 'file-image';

export default IconFileImageTwotone;
