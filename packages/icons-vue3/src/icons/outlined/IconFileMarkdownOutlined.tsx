// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileMarkdownOutlinedSvg from 'gupo-icons-base/es/asn/FileMarkdownOutlined';

export interface FileMarkdownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileMarkdownOutlined: FileMarkdownOutlinedIconType = (props, context) => (
    <Icon name='FileMarkdownOutlined' {...{ ...props, ...context.attrs }} icon={FileMarkdownOutlinedSvg} />
);

IconFileMarkdownOutlined.displayName = 'IconFileMarkdownOutlined';
IconFileMarkdownOutlined.theme = 'outlined';
IconFileMarkdownOutlined.originName = 'file-markdown';

export default IconFileMarkdownOutlined;
