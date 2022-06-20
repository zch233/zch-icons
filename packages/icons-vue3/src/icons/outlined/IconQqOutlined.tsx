// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import QqOutlinedSvg from 'icon-base/es/asn/QqOutlined';

export interface QqOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconQqOutlined: QqOutlinedIconType = (props, context) => <Icon name='QqOutlined' {...{ ...props, ...context.attrs }} icon={QqOutlinedSvg} />;

IconQqOutlined.displayName = 'IconQqOutlined';

export default IconQqOutlined;
