// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VerticalRightOutlinedSvg from 'icon-base/es/asn/VerticalRightOutlined';

export interface VerticalRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconVerticalRightOutlined: VerticalRightOutlinedIconType = (props, context) => (
    <Icon name='VerticalRightOutlined' {...{ ...props, ...context.attrs }} icon={VerticalRightOutlinedSvg} />
);

IconVerticalRightOutlined.displayName = 'IconVerticalRightOutlined';

export default IconVerticalRightOutlined;
