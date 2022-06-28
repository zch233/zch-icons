// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FieldBinaryOutlinedSvg from 'gupo-icons-base/es/asn/FieldBinaryOutlined';

export interface FieldBinaryOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFieldBinaryOutlined: FieldBinaryOutlinedIconType = (props, context) => (
    <Icon name='FieldBinaryOutlined' {...{ ...props, ...context.attrs }} icon={FieldBinaryOutlinedSvg} />
);

IconFieldBinaryOutlined.displayName = 'IconFieldBinaryOutlined';
IconFieldBinaryOutlined.theme = 'outlined';
IconFieldBinaryOutlined.originName = 'field-binary';

export default IconFieldBinaryOutlined;
