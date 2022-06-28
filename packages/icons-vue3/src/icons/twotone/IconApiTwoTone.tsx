// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ApiTwotoneSvg from 'gupo-icons-base/es/asn/ApiTwotone';

export interface ApiTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconApiTwotone: ApiTwotoneIconType = (props, context) => <Icon name='ApiTwotone' {...{ ...props, ...context.attrs }} icon={ApiTwotoneSvg} />;

IconApiTwotone.displayName = 'IconApiTwotone';
IconApiTwotone.theme = 'twotone';
IconApiTwotone.originName = 'api';

export default IconApiTwotone;
