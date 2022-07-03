// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DeliveredProcedureOutlinedSvg from 'icons-base/es/asn/DeliveredProcedureOutlined';

export interface DeliveredProcedureOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDeliveredProcedureOutlined: DeliveredProcedureOutlinedIconType = (props, context) => (
    <Icon name='DeliveredProcedureOutlined' {...{ ...props, ...context.attrs }} icon={DeliveredProcedureOutlinedSvg} />
);

IconDeliveredProcedureOutlined.displayName = 'IconDeliveredProcedureOutlined';
IconDeliveredProcedureOutlined.theme = 'outlined';
IconDeliveredProcedureOutlined.originName = 'delivered-procedure';

export default IconDeliveredProcedureOutlined;
