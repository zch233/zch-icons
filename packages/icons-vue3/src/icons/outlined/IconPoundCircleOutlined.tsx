// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PoundCircleOutlinedSvg from 'icon-base/es/asn/PoundCircleOutlined';

export interface PoundCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPoundCircleOutlined: PoundCircleOutlinedIconType = (props, context) => (
    <Icon name='PoundCircleOutlined' {...{ ...props, ...context.attrs }} icon={PoundCircleOutlinedSvg} />
);

IconPoundCircleOutlined.displayName = 'IconPoundCircleOutlined';

export default IconPoundCircleOutlined;
