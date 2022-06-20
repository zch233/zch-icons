// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FrownOutlinedSvg from 'icon-base/es/asn/FrownOutlined';

export interface FrownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFrownOutlined: FrownOutlinedIconType = (props, context) => <Icon name='FrownOutlined' {...{ ...props, ...context.attrs }} icon={FrownOutlinedSvg} />;

IconFrownOutlined.displayName = 'IconFrownOutlined';

export default IconFrownOutlined;
