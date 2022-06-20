// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PayCircleOutlinedSvg from 'icon-base/es/asn/PayCircleOutlined';

export interface PayCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPayCircleOutlined: PayCircleOutlinedIconType = (props, context) => (
    <Icon name='PayCircleOutlined' {...{ ...props, ...context.attrs }} icon={PayCircleOutlinedSvg} />
);

IconPayCircleOutlined.displayName = 'IconPayCircleOutlined';

export default IconPayCircleOutlined;
