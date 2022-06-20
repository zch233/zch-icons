// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileTextOutlinedSvg from 'icon-base/es/asn/FileTextOutlined';

export interface FileTextOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileTextOutlined: FileTextOutlinedIconType = (props, context) => (
    <Icon name='FileTextOutlined' {...{ ...props, ...context.attrs }} icon={FileTextOutlinedSvg} />
);

IconFileTextOutlined.displayName = 'IconFileTextOutlined';

export default IconFileTextOutlined;
