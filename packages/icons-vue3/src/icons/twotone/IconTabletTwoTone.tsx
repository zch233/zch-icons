// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TabletTwoToneSvg from 'icon-base/es/asn/TabletTwoTone';

export interface TabletTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTabletTwoTone: TabletTwoToneIconType = (props, context) => <Icon name='TabletTwoTone' {...{ ...props, ...context.attrs }} icon={TabletTwoToneSvg} />;

IconTabletTwoTone.displayName = 'IconTabletTwoTone';

export default IconTabletTwoTone;
