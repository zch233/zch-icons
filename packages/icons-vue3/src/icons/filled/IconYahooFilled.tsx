// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import YahooFilledSvg from 'icon-base/es/asn/YahooFilled';

export interface YahooFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconYahooFilled: YahooFilledIconType = (props, context) => <Icon name='YahooFilled' {...{ ...props, ...context.attrs }} icon={YahooFilledSvg} />;

IconYahooFilled.displayName = 'IconYahooFilled';

export default IconYahooFilled;
