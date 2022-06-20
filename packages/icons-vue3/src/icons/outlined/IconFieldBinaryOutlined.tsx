// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FieldBinaryOutlinedSvg from 'icon-base/es/asn/FieldBinaryOutlined';

export interface FieldBinaryOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFieldBinaryOutlined: FieldBinaryOutlinedIconType = (props, context) => (
    <Icon name='FieldBinaryOutlined' {...{ ...props, ...context.attrs }} icon={FieldBinaryOutlinedSvg} />
);

IconFieldBinaryOutlined.displayName = 'IconFieldBinaryOutlined';

export default IconFieldBinaryOutlined;
