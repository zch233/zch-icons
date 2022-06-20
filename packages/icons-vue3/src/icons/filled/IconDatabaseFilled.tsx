// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DatabaseFilledSvg from 'icon-base/es/asn/DatabaseFilled';

export interface DatabaseFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDatabaseFilled: DatabaseFilledIconType = (props, context) => (
    <Icon name='DatabaseFilled' {...{ ...props, ...context.attrs }} icon={DatabaseFilledSvg} />
);

IconDatabaseFilled.displayName = 'IconDatabaseFilled';

export default IconDatabaseFilled;
