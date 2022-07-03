// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileAddOutlinedSvg from 'icons-base/es/asn/FileAddOutlined';

export interface FileAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileAddOutlined: FileAddOutlinedIconType = (props, context) => (
    <Icon name='FileAddOutlined' {...{ ...props, ...context.attrs }} icon={FileAddOutlinedSvg} />
);

IconFileAddOutlined.displayName = 'IconFileAddOutlined';
IconFileAddOutlined.theme = 'outlined';
IconFileAddOutlined.originName = 'file-add';

export default IconFileAddOutlined;
