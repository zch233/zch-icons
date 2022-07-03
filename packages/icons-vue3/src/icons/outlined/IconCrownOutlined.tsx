// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CrownOutlinedSvg from 'icons-base/es/asn/CrownOutlined';

export interface CrownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCrownOutlined: CrownOutlinedIconType = (props, context) => <Icon name='CrownOutlined' {...{ ...props, ...context.attrs }} icon={CrownOutlinedSvg} />;

IconCrownOutlined.displayName = 'IconCrownOutlined';
IconCrownOutlined.theme = 'outlined';
IconCrownOutlined.originName = 'crown';

export default IconCrownOutlined;
