// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DoubleLeftOutlinedSvg from 'icon-base/es/asn/DoubleLeftOutlined';

export interface DoubleLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDoubleLeftOutlined: DoubleLeftOutlinedIconType = (props, context) => (
    <Icon name='DoubleLeftOutlined' {...{ ...props, ...context.attrs }} icon={DoubleLeftOutlinedSvg} />
);

IconDoubleLeftOutlined.displayName = 'IconDoubleLeftOutlined';

export default IconDoubleLeftOutlined;
