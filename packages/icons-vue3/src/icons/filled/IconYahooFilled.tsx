// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import YahooFilledSvg from 'icons-base/es/asn/YahooFilled';

export interface YahooFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconYahooFilled: YahooFilledIconType = (props, context) => <Icon name='YahooFilled' {...{ ...props, ...context.attrs }} icon={YahooFilledSvg} />;

IconYahooFilled.displayName = 'IconYahooFilled';
IconYahooFilled.theme = 'filled';
IconYahooFilled.originName = 'yahoo';

export default IconYahooFilled;
