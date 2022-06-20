// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FieldTimeOutlinedSvg from 'icon-base/es/asn/FieldTimeOutlined';

export interface FieldTimeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFieldTimeOutlined: FieldTimeOutlinedIconType = (props, context) => (
    <Icon name='FieldTimeOutlined' {...{ ...props, ...context.attrs }} icon={FieldTimeOutlinedSvg} />
);

IconFieldTimeOutlined.displayName = 'IconFieldTimeOutlined';

export default IconFieldTimeOutlined;
