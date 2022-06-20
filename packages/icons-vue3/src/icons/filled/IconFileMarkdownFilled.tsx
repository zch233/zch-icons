// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileMarkdownFilledSvg from 'icon-base/es/asn/FileMarkdownFilled';

export interface FileMarkdownFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileMarkdownFilled: FileMarkdownFilledIconType = (props, context) => (
    <Icon name='FileMarkdownFilled' {...{ ...props, ...context.attrs }} icon={FileMarkdownFilledSvg} />
);

IconFileMarkdownFilled.displayName = 'IconFileMarkdownFilled';

export default IconFileMarkdownFilled;
