// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PartitionOutlinedSvg from 'gupo-icons-base/es/asn/PartitionOutlined';

export interface PartitionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPartitionOutlined: PartitionOutlinedIconType = (props, context) => (
    <Icon name='PartitionOutlined' {...{ ...props, ...context.attrs }} icon={PartitionOutlinedSvg} />
);

IconPartitionOutlined.displayName = 'IconPartitionOutlined';
IconPartitionOutlined.theme = 'outlined';
IconPartitionOutlined.originName = 'partition';

export default IconPartitionOutlined;
