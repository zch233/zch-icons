// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileMarkdownTwoToneSvg from 'icon-base/es/asn/FileMarkdownTwoTone';

export interface FileMarkdownTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileMarkdownTwoTone: FileMarkdownTwoToneIconType = (props, context) => (
    <Icon name='FileMarkdownTwoTone' {...{ ...props, ...context.attrs }} icon={FileMarkdownTwoToneSvg} />
);

IconFileMarkdownTwoTone.displayName = 'IconFileMarkdownTwoTone';

export default IconFileMarkdownTwoTone;
