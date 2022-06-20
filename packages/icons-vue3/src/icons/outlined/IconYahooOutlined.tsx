// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import YahooOutlinedSvg from 'icon-base/es/asn/YahooOutlined';

export interface YahooOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconYahooOutlined: YahooOutlinedIconType = (props, context) => <Icon name='YahooOutlined' {...{ ...props, ...context.attrs }} icon={YahooOutlinedSvg} />;

IconYahooOutlined.displayName = 'IconYahooOutlined';

export default IconYahooOutlined;
