// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftCircleOutlinedSvg from 'icon-base/es/asn/LeftCircleOutlined';

export interface LeftCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLeftCircleOutlined: LeftCircleOutlinedIconType = (props, context) => (
    <Icon name='LeftCircleOutlined' {...{ ...props, ...context.attrs }} icon={LeftCircleOutlinedSvg} />
);

IconLeftCircleOutlined.displayName = 'IconLeftCircleOutlined';

export default IconLeftCircleOutlined;
