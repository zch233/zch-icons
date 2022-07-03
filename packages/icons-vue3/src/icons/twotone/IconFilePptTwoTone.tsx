// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePptTwotoneSvg from 'icons-base/es/asn/FilePptTwotone';

export interface FilePptTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilePptTwotone: FilePptTwotoneIconType = (props, context) => (
    <Icon name='FilePptTwotone' {...{ ...props, ...context.attrs }} icon={FilePptTwotoneSvg} />
);

IconFilePptTwotone.displayName = 'IconFilePptTwotone';
IconFilePptTwotone.theme = 'twotone';
IconFilePptTwotone.originName = 'file-ppt';

export default IconFilePptTwotone;
