// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PartitionOutlinedSvg from 'icon-base/es/asn/PartitionOutlined';

export interface PartitionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPartitionOutlined: PartitionOutlinedIconType = (props, context) => (
    <Icon name='PartitionOutlined' {...{ ...props, ...context.attrs }} icon={PartitionOutlinedSvg} />
);

IconPartitionOutlined.displayName = 'IconPartitionOutlined';

export default IconPartitionOutlined;
