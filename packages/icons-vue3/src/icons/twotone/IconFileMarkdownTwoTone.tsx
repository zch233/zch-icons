// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileMarkdownTwotoneSvg from 'gupo-icons-base/es/asn/FileMarkdownTwotone';

export interface FileMarkdownTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileMarkdownTwotone: FileMarkdownTwotoneIconType = (props, context) => (
    <Icon name='FileMarkdownTwotone' {...{ ...props, ...context.attrs }} icon={FileMarkdownTwotoneSvg} />
);

IconFileMarkdownTwotone.displayName = 'IconFileMarkdownTwotone';
IconFileMarkdownTwotone.theme = 'twotone';
IconFileMarkdownTwotone.originName = 'file-markdown';

export default IconFileMarkdownTwotone;
