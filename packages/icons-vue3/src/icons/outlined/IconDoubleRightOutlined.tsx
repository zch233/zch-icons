// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DoubleRightOutlinedSvg from 'icon-base/es/asn/DoubleRightOutlined';

export interface DoubleRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDoubleRightOutlined: DoubleRightOutlinedIconType = (props, context) => (
    <Icon name='DoubleRightOutlined' {...{ ...props, ...context.attrs }} icon={DoubleRightOutlinedSvg} />
);

IconDoubleRightOutlined.displayName = 'IconDoubleRightOutlined';

export default IconDoubleRightOutlined;
