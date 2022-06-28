// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FieldStringOutlinedSvg from 'gupo-icons-base/es/asn/FieldStringOutlined';

export interface FieldStringOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFieldStringOutlined: FieldStringOutlinedIconType = (props, context) => (
    <Icon name='FieldStringOutlined' {...{ ...props, ...context.attrs }} icon={FieldStringOutlinedSvg} />
);

IconFieldStringOutlined.displayName = 'IconFieldStringOutlined';
IconFieldStringOutlined.theme = 'outlined';
IconFieldStringOutlined.originName = 'field-string';

export default IconFieldStringOutlined;
