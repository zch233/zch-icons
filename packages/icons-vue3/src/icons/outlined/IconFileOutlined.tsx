// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileOutlinedSvg from 'gupo-icons-base/es/asn/FileOutlined';

export interface FileOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileOutlined: FileOutlinedIconType = (props, context) => <Icon name='FileOutlined' {...{ ...props, ...context.attrs }} icon={FileOutlinedSvg} />;

IconFileOutlined.displayName = 'IconFileOutlined';
IconFileOutlined.theme = 'outlined';
IconFileOutlined.originName = 'file';

export default IconFileOutlined;
