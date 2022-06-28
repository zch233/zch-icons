// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileSearchOutlinedSvg from 'gupo-icons-base/es/asn/FileSearchOutlined';

export interface FileSearchOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileSearchOutlined: FileSearchOutlinedIconType = (props, context) => (
    <Icon name='FileSearchOutlined' {...{ ...props, ...context.attrs }} icon={FileSearchOutlinedSvg} />
);

IconFileSearchOutlined.displayName = 'IconFileSearchOutlined';
IconFileSearchOutlined.theme = 'outlined';
IconFileSearchOutlined.originName = 'file-search';

export default IconFileSearchOutlined;
