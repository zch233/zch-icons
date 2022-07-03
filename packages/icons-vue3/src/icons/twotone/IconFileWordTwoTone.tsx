// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileWordTwotoneSvg from 'icons-base/es/asn/FileWordTwotone';

export interface FileWordTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileWordTwotone: FileWordTwotoneIconType = (props, context) => (
    <Icon name='FileWordTwotone' {...{ ...props, ...context.attrs }} icon={FileWordTwotoneSvg} />
);

IconFileWordTwotone.displayName = 'IconFileWordTwotone';
IconFileWordTwotone.theme = 'twotone';
IconFileWordTwotone.originName = 'file-word';

export default IconFileWordTwotone;
